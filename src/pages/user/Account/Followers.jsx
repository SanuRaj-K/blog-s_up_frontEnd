import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Followers() {
    const [followers, setFollowers] = useState([]);
    const user = useSelector((state) => state.user.user);
    const id = user._id;

    useEffect(() => {
        axios
            .get(`user/getfollowers/${id}`)
            .then((res) => {
                console.log(res.data);
                setFollowers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <>
            <div className=" text-center py-4 font-bold  text-[30px]">Followers</div>
            <div className="w-2/3 mx-auto">
                <div className="bg-white shadow-md rounded ">
                    <table className="text-left w-full  border-collapse">
                        <thead>
                            <tr className=" ">
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Username
                                </th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {followers.map((item) => {
                                return (
                                    <tr className="hover:bg-gray-200  cursor-pointer">
                                        <td className="py-4 px-6 border-b border-grey-light">{item.username}</td>
                                        <td className="py-4 px-6 border-b border-grey-light">
                                            <Link className="text-grey-lighter font-medium   py-2 px-3 rounded text-xs bg-green-500 mr-3 hover:bg-green-200">
                                                Message
                                            </Link>
                                            <Link className="text-grey-lighter font-medium   py-2 px-3 rounded text-xs bg-blue-200 hover:bg-blue-500">
                                                View profile
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Followers;
