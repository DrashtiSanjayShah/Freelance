import React from "react";
import { Button, Category, Brand } from "../../components/compindex";
import NFTDetailsPage from "../../NFTDetailsPage/NFTDetailsPage";


const NFTDetails = () => {
    return (
        <div>
            <NFTDetailsPage />
            <Category />
            <Brand />
        </div>
    );
};


export default NFTDetails;