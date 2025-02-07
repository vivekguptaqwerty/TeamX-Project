"use client";
import { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/Context/AppContext";
import CategoryGraph from "@/components/CategoryGraph";
import CategoryInfo from "@/components/CategoryInfo";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import Navbar from "@/components/Navbar";
import MakeOrder from "@/components/MakeOrder";

// QuoteData interface matching CategoryGraph component
interface QuoteData {
  event_id: string;
  event_outcome_id: string;
  max_leverage: number;
  max_wager: number;
  min_wager: number;
  wager: number;
  estimated_payout: number;
  estimated_probability: number;
}

// EventData interface
interface EventData {
  _id: string;
  name: string;
  description: string;
  category: {
    name: string;
  };
  ends_at: string;
  outcomes: Array<{
    _id: string;
    name: string;
    trader_info: {
      estimated_probability: number;
      max_leverage: number;
      estimated_payout: number;
    };
  }>;
  event_images_url: string[];
}

export default function EventCategoryPageDetails() {
  const { filter, setFilter, setIsLoading } = useContext(AppContext);
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [isOrderMade, setIsOrderMade] = useState(false);
  const params = useParams();
  const categoryId = params?.categoryId as string | undefined;
  const [qoutesData, setQoutesData] = useState<QuoteData[]>([]); // Updated type

  // Memoized fetch function
  const fetchEvent = useCallback(async () => {
    if (!categoryId) return;

    try {
      setIsLoading(true);

      const response = await fetch(
        `https://test-api.everyx.io/events/${categoryId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setEventData(data);
    } catch (error) {
      console.error("Failed to fetch event:", error);
      setEventData(null);
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, setIsLoading]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  return (
    <div>
      <Navbar home="Home" />
      <HeadingSlider filter={filter} setFilter={setFilter} />

      {eventData ? (
        <>
          <CategoryInfo
            eventData={eventData}
            isOrderMade={isOrderMade}
            setIsOrderMade={setIsOrderMade}
          />
          {!isOrderMade && (
            <CategoryGraph
              eventData={eventData}
              setIsOrderMade={setIsOrderMade}
              setQoutesData={setQoutesData}
            />
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">Loading event details...</p>
      )}

      {isOrderMade && <MakeOrder qoutesData={qoutesData[0]} />}
      <Footer />
    </div>
  );
}