import axios from "axios";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

function Nav({ updateSelectedNote }) {
  const [menuItems, updateMenuItems] = useState({});

  useEffect(() => {
    const getNavItems = async () => {
      const response = await axios.get("http://localhost:3001/notes/all-notes");
      updateMenuItems(response.data);
    };

    getNavItems().catch(console.error);
  }, []);

  const menu = Object.keys(menuItems).map((key) => {
    const title = key;

    return (
      <li>
        <details open>
          <summary>{title}</summary>
          <ul>
            {Object.keys(menuItems[key]).map((el) => {
              return (
                <li>
                  <details open>
                    <summary>{el}</summary>
                    <ul>
                      {menuItems[key][el].map((subEl) => {
                        return (
                          <NavItem
                            dataFile={`${title}/${el}/${subEl}`}
                            title={subEl}
                            updateSelectedNote={updateSelectedNote}
                          />
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    );
  });

  return (
    <nav className="h-full">
      <ul className="h-full menu bg-base-200 rounded-box w-56">{menu}</ul>
    </nav>
  );
}
export default Nav;
