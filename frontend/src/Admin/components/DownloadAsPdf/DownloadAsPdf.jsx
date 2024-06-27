import React from 'react';
import jsPDF from 'jspdf';
import Button from '../Button';
import { useRef } from 'react';
// import OrderDetailsPage from '../../Pages/OrdersPage/OrderDetailsPage';

export default function DownloadAsPdf({ htmlData, invoiceName }) {
  const refData = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    // doc.setFont('Inter-Regular', 'normal');

    doc.html(refData.current, {
      async callback(doc) {
        await doc.save(`invoice`);
      },
    });
  };
  return (
    <div>
      <Button
        success
        className="flex w-[100px] justify-center text-center"
        onClick={handleGeneratePdf}
      >
        Download
      </Button>
    </div>
  );
}
