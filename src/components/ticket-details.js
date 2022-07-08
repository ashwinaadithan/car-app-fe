import { useEffect, useState } from "react";

import { HiHashtag } from "react-icons/hi";
import { getTicketById } from "../api";
import { useParams } from "react-router-dom";

const TicketDetails = ({}) => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      const res = await getTicketById(id);
      if (res && res.data) setTicket(res.data);
    };

    fetchTicket();
  }, [id]);

  console.log(ticket, id);

  return ticket ? (
    <div className="m-2">
      <div className="p-2 flex justify-between items-center">
        <h2 className="text-2xl uppercase font-bold text-gray-500">
          {ticket.title}
        </h2>
        <div className="flex items-center text-gray-400">
          <HiHashtag size={40} />
          <h1 className="text-2xl ml-2">{ticket._id}</h1>
        </div>
      </div>
      <p className="p-4 text-gray-500">{ticket.description}</p>
      <div className="grid grid-cols-3 gap-3">
        {!!ticket.images.length &&
          ticket.images.map((image) => <img key={image} src={image} />)}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TicketDetails;
