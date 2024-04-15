import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "./ListingItem";
import styles from "./CardLIst.module.css";

const CardLIst: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section className={styles.homes}>
      <ListingItem
        listingImage="/listing-image@2x.png"
        listingTitle="Brightwoods Cabin"
        listingSubtitle="Bridlepath, Ontario, Canada"
        rating="4.9"
        price="$658"
        showBestTime
        onListingItemContainerClick={onListingItemContainerClick}
      />
      <ListingItem
        listingImage="/image@2x.png"
        listingTitle="Urban Loft"
        listingSubtitle="Georgina Bay, Ontario, Canada"
        rating="4.5"
        price="$410"
        showBestTime={false}
        propMinWidth="81px"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-1@2x.png"
        listingTitle="Forestville Cottages"
        listingSubtitle="Simcoe, Ontario Canada"
        rating="5.0"
        price="$325"
        showBestTime={false}
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-2@2x.png"
        listingTitle="Unionville Logde"
        listingSubtitle="Markham, Ontario Canada"
        rating="4.6"
        price="$485"
        showBestTime
        propMinWidth="129px"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-3@2x.png"
        listingTitle="Missisuaga Aistream"
        listingSubtitle="Missisauga, Ontario, Canada"
        rating="4.8"
        price="$502"
        showBestTime
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-4@2x.png"
        listingTitle="Niagara Homes"
        listingSubtitle="Niagara, Ontario, Canada"
        rating="4.9"
        price="$655"
        showBestTime={false}
        propMinWidth="118px"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-5@2x.png"
        listingTitle="Sunny Estate"
        listingSubtitle="Barcort, Ontario Canada"
        rating="5.0"
        price="$320"
        showBestTime
        propMinWidth="102px"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-6@2x.png"
        listingTitle="Lawrence Hills"
        listingSubtitle="Lawrence, Ontario Canada"
        rating="5.0"
        price="$350"
        showBestTime={false}
        propMinWidth="112px"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-7@2x.png"
        listingTitle="Simcoe Lake Lodge"
        listingSubtitle="Simcoe, Ontario, Canada"
        rating="5.0"
        price="$395"
        showBestTime={false}
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-8@2x.png"
        listingTitle="Wasaga Beach Home"
        listingSubtitle="Georgina Bay, Ontario, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-9@2x.png"
        listingTitle="Banff Hills"
        listingSubtitle="Banff, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propMinWidth="79px"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-10@2x.png"
        listingTitle="Creemore Canada"
        listingSubtitle="Creemore, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-11@2x.png"
        listingTitle="Kawartha Lakes"
        listingSubtitle="Kawartha, Alberta,  Canada"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propMinWidth="121px"
        propMinWidth1="unset"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-12@2x.png"
        listingTitle="Revelstoke Cabin"
        listingSubtitle="Revelstoke, Alberta, Canada"
        rating="5.0"
        price="$385"
        showBestTime
        propMinWidth="unset"
        propMinWidth1="unset"
        propPadding="var(--padding-8xs) 0px"
        propFlex="unset"
        propMinWidth2="70px"
      />
      <ListingItem
        listingImage="/image-13@2x.png"
        listingTitle="Brightwoods Estate"
        listingSubtitle="Brightwoods Estate"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propMinWidth="unset"
        propMinWidth1="127px"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
      <ListingItem
        listingImage="/image-14@2x.png"
        listingTitle="Brightwoods Estate"
        listingSubtitle="Brightwoods Estate"
        rating="5.0"
        price="$385"
        showBestTime={false}
        propMinWidth="unset"
        propMinWidth1="127px"
        propPadding="var(--padding-5xs-5) 0px"
        propFlex="1"
        propMinWidth2="unset"
      />
    </section>
  );
};

export default CardLIst;