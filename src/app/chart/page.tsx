'use client';

import React, { useEffect } from 'react';

/**
 * The chart tool lives in its own Cloudflare Pages project, so it can be
 * redeployed on its own schedule without rebuilding this site. This page now
 * only exists to keep the old /chart address working for anyone who bookmarked
 * it while it was a placeholder.
 *
 * The redirect is client side because this site is a static export, which rules
 * out a redirect in next.config.
 */
const CHART_APP = 'https://chart.deskproduct.com';

export default function SNChartPage() {
  useEffect(() => {
    // replace, not assign: Back should return to the portal, not bounce here.
    window.location.replace(CHART_APP);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">SN Chart</h1>
      <p className="text-gray-600 mb-8">กำลังพาไปยังหน้ากราฟ&hellip;</p>
      <a href={CHART_APP} className="text-blue-600 hover:underline">
        ถ้าไม่เปลี่ยนหน้าอัตโนมัติ คลิกที่นี่ &rarr;
      </a>
    </div>
  );
}
