import React from "react";
import Link from "next/link";

export default function Footer() {
  // IF NECESSARY CREATE JS FILE & FUNCTION TO STORE LIST AND MAP THROUGH EACH AND RETURN A UL WITH ITS CHILDREN AS LI ITEMS

  return (
    <footer className="footer">
      <div className="footer-container1">
        <div className="footer-item">
          <h2>Unemployment Insurance Fraud</h2>
          <ul className="footer-list">
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="dev-plan">Development Plan</Link>
            </li>
            <li>
              <Link href="work">Come Work With Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Official Information</h2>
          <ul className="footer-list">
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="dev-plan">Development Plan</Link>
            </li>
            <li>
              <Link href="work">Come Work With Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Find Quickly</h2>
          <ul className="footer-list">
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="dev-plan">Development Plan</Link>
            </li>
            <li>
              <Link href="work">Come Work With Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Get in Touch</h2>
          <ul className="footer-list">
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="dev-plan">Development Plan</Link>
            </li>
            <li>
              <Link href="work">Come Work With Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container2"></div>
    </footer>
  );
}
