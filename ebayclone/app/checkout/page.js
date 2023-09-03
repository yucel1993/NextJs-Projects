"use client";

import MainLayout from "../layouts/MainLayout";

export default function () {
  return (
    <MainLayout>
      <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>

        <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
          <div className="w-[65%]">
            <div className="bg-white rounded-lg p-4 border">
              <div className="text-xl font-semibold mb-2">Shipping Address</div>

              <ul className="text-sm mt-2">
                <li>Name: </li>
                <li>Address: </li>
                <li>Zip: </li>
                <li>City:</li>
                <li>Country:</li>
              </ul>
              <div className="flex items-center p-4 justify-center gap-2 border-t">
                <img width={50} src="/images/logo.svg" />
                <div className=" font-light mb-2 mt-2">
                  MONEY BACK GUARANTEE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
