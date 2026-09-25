import React from 'react';
import Link from 'next/link';

export default function SNChartPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">SN Chart (Public)</h1>
      <p className="text-gray-600 mb-8">หน้าสำหรับแสดงกราฟ (รอเพิ่มข้อมูลในอนาคต)</p>
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; กลับหน้าหลัก
      </Link>
    </div>
  );
}
