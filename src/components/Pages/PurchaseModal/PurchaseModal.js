import { format } from "date-fns";
import React from 'react';

const PurchaseModal = ({date, setDate, setPurchase, purchase}) => {

  const formatDate = format(date, 'PP');

    return (
        <div>

        <input type="checkbox" id="purchase-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">{purchase.name} </h3>
            <p className="py-4">{formatDate}</p>
            <div className="modal-action">
              <label htmlFor="purchase-modal" className="btn">
                Purchase
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PurchaseModal;