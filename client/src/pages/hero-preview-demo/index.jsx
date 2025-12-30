import React from "react";
import { HeroPreview } from "../../components";
import "./style.css";

/**
 * Demo page for the HeroPreview component
 * This page showcases the hero selection and detailed information display
 */
export default function HeroPreviewDemo() {
  return (
    <div className="hero-preview-demo">
      <div className="demo-header">
        <h1 className="demo-title">Overwatch 2 Hero Database</h1>
        <p className="demo-description">
          Browse through all Overwatch 2 heroes and view detailed information including stats, 
          matchups, biography, and more.
        </p>
      </div>
      
      <HeroPreview />
      
      <div className="demo-footer">
        <p className="demo-footer-text">
          Data is updated for Season 20. Click on any hero to view their complete profile.
        </p>
      </div>
    </div>
  );
}

