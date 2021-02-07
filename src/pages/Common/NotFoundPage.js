import React from "react";

const NotFoundPage = () => {
    return (
        <div>
            {/*Import Header here*/}
            <div style={{height: '90px', width: '100%', backgroundColor: 'white'}}>
                Header bar
            </div>
            {/*Import Header above*/}

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    paddingTop: "30%",
                }}
            >
                <span>Error 404</span>
                <span>Unable to find page</span>
            </div>
        </div>
    );
};

export default NotFoundPage;
