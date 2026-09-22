"use client";

import React from "react";
import { ArrowRight, PhoneCall, Headphones } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CTASection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Text & Options */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Lorem ipsum dolor sit amet
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Consectetur adipiscing elit sed do eiusmod!
              </h2>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-gray-100 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Lorem Sales</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-gray-100 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Dolor Support</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet: <span className="font-semibold text-red-600">+62 800-0000-0000</span> atau <span className="font-semibold text-red-600">lorem@ipsum.com</span>
                </p>
              </div>
            </div>

            <div>
              <a
                href="#sales"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-xl transition-all cursor-pointer"
              >
                Lorem Ipsum <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image Feature with Fallback */}
          <div className="lg:col-span-5 relative cursor-pointer">
            <ImagePlaceholder label="Lorem Placeholder" height="h-[380px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
