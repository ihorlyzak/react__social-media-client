import "./topbar.css";
import { Search, LibraryMusicOutlined, NotificationsNoneOutlined, VideoLibraryOutlined, CollectionsOutlined } from '@mui/icons-material';
import { icons } from "configs/icons";

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarContainer">

                <div className="topbarLeft">
                    <span className="topbar__logo">SQUIRREL</span>
                </div>

                <div className="topbarCenter">
                    <div className="topbarCenterLeft">
                        <div className="topbarIcons">                            
                            <div className="topbar__iconItem">
                                <NotificationsNoneOutlined className="topbar__notificationIcon" />
                                <span className="topbar__iconBadge">3</span>
                            </div>
                            <div className="topbar__iconItem">
                                <LibraryMusicOutlined className="topbar__notificationIcon" />
                            </div>
                            <div className="topbar__iconItem">
                                <VideoLibraryOutlined className="topbar__notificationIcon" />
                            </div>
                            <div className="topbar__iconItem">
                                <CollectionsOutlined className="topbar__notificationIcon" />
                            </div>

                        </div>
                    </div>

                    <div className="topbarCenterRight">
                        <div className="topbarAccountInfo">
                            <h2 className="topbar__accountName">Oliwia Lively</h2>
                            <p className="topbar__postsCount">0 Posts</p>
                        </div>
                        <img src={icons.AVATAR} alt="Avatar" className="topbar__img" />
                    </div>
                </div>

                <div className="topbarRight">
                    <div className="topbar__searchbar">
                        <Search className="topbar__searchbarIcon" />
                        <input placeholder="Search" className="topbar__searchbarInput" />
                    </div>
                </div>

            </div>
        </div>
    );
}