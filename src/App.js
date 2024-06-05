import "./App.css";
import {
  HikingCollection,
  MarketingFooter,
  NavBarHeader,
} from "./ui-components";
import { MapView } from "@aws-amplify/ui-react-geo";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Hike } from "./models";
import { Marker } from "react-map-gl";
import "@aws-amplify/ui-react-geo/styles.css";
import "@cloudscape-design/global-styles/index.css";
import Header from "@cloudscape-design/components/header";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Board from "@cloudscape-design/board-components/board";
import BoardItem from "@cloudscape-design/board-components/board-item";

import {
  Grid,
  View,
  useTheme,
  Button,
  SearchField,
  Flex,
} from "@aws-amplify/ui-react";

const useHikes = () => {
  const [hikes, setHikes] = useState([]);
  useEffect(() => {
    const getHikes = async () => {
      const hikes = await DataStore.query(Hike);
      setHikes(hikes);
    };

    getHikes();
  }, []);

  return hikes;
};

function App() {
  const hikes = useHikes();
  const [items, setItems] = useState([
    {
      id: "1",
      rowSpan: 1,
      columnSpan: 2,
      data: { title: "Demo 1", content: "First item" },
    },
    {
      id: "2",
      rowSpan: 1,
      columnSpan: 2,
      data: { title: "Demo 2", content: "Second item" },
    },
    {
      id: "3",
      rowSpan: 10,
      columnSpan: 6,
      data: { title: "Demo 3", content: "Third item" },
    },
  ]);

  return (
    <div class="container">
      <header>
        <TopNavigation
          identity={{
            href: "#",
            title: "Service",
            logo: {
              src: "/logo-small-top-navigation.svg",
              alt: "Service",
            },
          }}
          utilities={[
            {
              type: "button",
              text: "Link",
              href: "https://example.com/",
              external: true,
              externalIconAriaLabel: " (opens in a new tab)",
            },
            {
              type: "button",
              iconName: "notification",
              title: "Notifications",
              ariaLabel: "Notifications (unread)",
              badge: true,
              disableUtilityCollapse: false,
            },
            {
              type: "menu-dropdown",
              iconName: "settings",
              ariaLabel: "Settings",
              title: "Settings",
              items: [
                {
                  id: "settings-org",
                  text: "Organizational settings",
                },
                {
                  id: "settings-project",
                  text: "Project settings",
                },
              ],
            },
            {
              type: "menu-dropdown",
              text: "Customer Name",
              description: "email@example.com",
              iconName: "user-profile",
              items: [
                { id: "profile", text: "Profile" },
                { id: "preferences", text: "Preferences" },
                { id: "security", text: "Security" },
                {
                  id: "support-group",
                  text: "Support",
                  items: [
                    {
                      id: "documentation",
                      text: "Documentation",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                    { id: "support", text: "Support" },
                    {
                      id: "feedback",
                      text: "Feedback",
                      href: "#",
                      external: true,
                      externalIconAriaLabel: " (opens in new tab)",
                    },
                  ],
                },
                { id: "signout", text: "Sign out" },
              ],
            },
          ]}
        />
      </header>
      <nav>
        <HikingCollection />
      </nav>
      <main>
        <Board
          renderItem={(item) => (
            <BoardItem
              header={<Header>{item.data.title}</Header>}
              i18nStrings={{
                dragHandleAriaLabel: "Drag handle",
                dragHandleAriaDescription:
                  "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.",
                resizeHandleAriaLabel: "Resize handle",
                resizeHandleAriaDescription:
                  "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard.",
              }}
            >
              <MapView
                initialViewState={{
                  latitude: 33.743281,
                  longitude: -117.868986,
                  zoom: 7,
                }}
                style={{ width: "100%", height: "100%" }}
              ></MapView>
            </BoardItem>
          )}
          onItemsChange={(event) => setItems(event.detail.items)}
          items={items}
          i18nStrings={(() => {
            function createAnnouncement(
              operationAnnouncement,
              conflicts,
              disturbed
            ) {
              const conflictsAnnouncement =
                conflicts.length > 0
                  ? `Conflicts with ${conflicts
                      .map((c) => c.data.title)
                      .join(", ")}.`
                  : "";
              const disturbedAnnouncement =
                disturbed.length > 0
                  ? `Disturbed ${disturbed.length} items.`
                  : "";
              return [
                operationAnnouncement,
                conflictsAnnouncement,
                disturbedAnnouncement,
              ]
                .filter(Boolean)
                .join(" ");
            }
            return {
              liveAnnouncementDndStarted: (operationType) =>
                operationType === "resize" ? "Resizing" : "Dragging",
              liveAnnouncementDndItemReordered: (operation) => {
                const columns = `column ${operation.placement.x + 1}`;
                const rows = `row ${operation.placement.y + 1}`;
                return createAnnouncement(
                  `Item moved to ${
                    operation.direction === "horizontal" ? columns : rows
                  }.`,
                  operation.conflicts,
                  operation.disturbed
                );
              },
              liveAnnouncementDndItemResized: (operation) => {
                const columnsConstraint = operation.isMinimalColumnsReached
                  ? " (minimal)"
                  : "";
                const rowsConstraint = operation.isMinimalRowsReached
                  ? " (minimal)"
                  : "";
                const sizeAnnouncement =
                  operation.direction === "horizontal"
                    ? `columns ${operation.placement.width}${columnsConstraint}`
                    : `rows ${operation.placement.height}${rowsConstraint}`;
                return createAnnouncement(
                  `Item resized to ${sizeAnnouncement}.`,
                  operation.conflicts,
                  operation.disturbed
                );
              },
              liveAnnouncementDndItemInserted: (operation) => {
                const columns = `column ${operation.placement.x + 1}`;
                const rows = `row ${operation.placement.y + 1}`;
                return createAnnouncement(
                  `Item inserted to ${columns}, ${rows}.`,
                  operation.conflicts,
                  operation.disturbed
                );
              },
              liveAnnouncementDndCommitted: (operationType) =>
                `${operationType} committed`,
              liveAnnouncementDndDiscarded: (operationType) =>
                `${operationType} discarded`,
              liveAnnouncementItemRemoved: (op) =>
                createAnnouncement(
                  `Removed item ${op.item.data.title}.`,
                  [],
                  op.disturbed
                ),
              navigationAriaLabel: "Board navigation",
              navigationAriaDescription:
                "Click on non-empty item to move focus over",
              navigationItemAriaLabel: (item) =>
                item ? item.data.title : "Empty",
            };
          })()}
        />
        {/* <MapView
          initialViewState={{
            latitude: 33.743281,
            longitude: -117.868986,
            zoom: 7,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {hikes.map((hike) => (
            <Marker latitude={hike.lat} longitude={hike.long} key={hike.id} />
          ))}
        </MapView> */}
      </main>
      <footer>
        <MarketingFooter width={"100%"} />
      </footer>
    </div>
  );
}

export default App;
