import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SN Web Application
          </h1>
          <p className="text-lg text-gray-600">
            แพลตฟอร์มสำหรับจัดการ Structured Note (SN) 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Menu 1: SN Chart */}
          <Link href="/chart" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  SN Chart
                </h2>
                <p className="text-gray-600 text-sm">
                  ดูและวิเคราะห์ข้อมูลราคา กราฟสำหรับ Structured Note
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  สาธารณะ (Public)
                </span>
                <span className="text-blue-600 text-sm font-medium group-hover:underline">เข้าสู่ระบบ &rarr;</span>
              </div>
            </div>
          </Link>

          {/* Menu 2: IC Order */}
          <a href="https://order.deskproduct.com" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  IC Order
                </h2>
                <p className="text-gray-600 text-sm">
                  ระบบส่งคำสั่งซื้อขาย Structured Note สำหรับ Investment Consultant
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  ล็อกสิทธิ์ (Login Required)
                </span>
                <span className="text-purple-600 text-sm font-medium group-hover:underline">เข้าใช้งาน &rarr;</span>
              </div>
            </div>
          </a>

          {/* Menu 3: Trader Portal */}
          <a href="https://order.deskproduct.com" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Trader Portal
                </h2>
                <p className="text-gray-600 text-sm">
                  ระบบจัดการคำสั่งซื้อขายและการป้องกันความเสี่ยงสำหรับ Trader
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  ล็อกสิทธิ์ (Login Required)
                </span>
                <span className="text-red-600 text-sm font-medium group-hover:underline">เข้าใช้งาน &rarr;</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
