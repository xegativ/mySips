import { useState, useEffect } from "react";

interface NavBarProps {
    onClickFilter: (dataTagBoolUpdate: boolean[]) => void;
}

function NavBar({ onClickFilter }: NavBarProps) {
    const [isFilterVisible, setFilterVisible] = useState(false);
    // const [dataTagBool, setDataTagBool] = useState<
    //   { tagName: string; c: string; tagID: number }[]
    // >([]);
    const [dataTagBool, setDataTagBool] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const dataTag = [
        { tagName: "Fruit", c: "orange", tagID: 0 },
        { tagName: "Coffee", c: "orange", tagID: 1 },
        { tagName: "Milk", c: "orange", tagID: 2 },
        { tagName: "Hot", c: "orange", tagID: 3 },
        { tagName: "Cold", c: "orange", tagID: 4 },
        { tagName: "Pearls", c: "orange", tagID: 5 },
    ];

    // Handle check for user logged in
    // no el triggering this check
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        const isLoggedIn = async (): Promise<void> => {
            try {
                const response = await fetch(
                    "http://localhost:3000/is-logged-in",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.ok) {
                    console.log("User Logged In");

                    setLoggedIn(await response.json());
                } else {
                    const errorResponse = await response.text();
                    console.error("User Login Failed: ", errorResponse);

                    setLoggedIn(false);
                }
            } catch (error) {
                console.log("Error during checking if user logged in:", error);

                setLoggedIn(false);
            }
        };

        isLoggedIn();
    }, []);

    const openMenu = () => {
        if (isFilterVisible) {
            setFilterVisible(false);
        } else {
            setFilterVisible(true);
        }
    };

    const handleFilterChange = () => {
        console.log("Filter pressed");
        onClickFilter(dataTagBool);
    };

    const selectTag = (index: number) => {
        const updatedBool = dataTagBool.map((item, i) => {
            if (index == i) {
                if (item == true) {
                    item = false;
                } else {
                    item = true;
                }
            }
            return item;
        });

        setDataTagBool(updatedBool);
    };

    return (
        <>
            <div className="nav-box">
                <p onClick={openMenu}>Filter</p>
                <p>Save</p>
                {loggedIn ? <p>Logout</p> : <p>Login</p>}
            </div>
            {isFilterVisible && (
                <div className="filter-box">
                    {dataTag.map((_item, index) => {
                        if (dataTagBool[index] == false) {
                            return (
                                <div
                                    className="tag tag-popup"
                                    style={{
                                        color: "black",
                                        backgroundColor: dataTag[index].c,
                                    }}
                                    onClick={() => selectTag(index)}
                                >
                                    {dataTag[index].tagName}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className="tag tag-popup"
                                    style={{
                                        color: "black",
                                        backgroundColor: "#FF4500",
                                    }}
                                    onClick={() => selectTag(index)}
                                >
                                    {dataTag[index].tagName}
                                </div>
                            );
                        }
                    })}
                    <div
                        className="tag tag-popup"
                        style={{ color: "black", backgroundColor: "yellow" }}
                        onClick={handleFilterChange}
                    >
                        Filter
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
