import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import banner from "../../public/Banner.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="py-20"> {/* Add space between navbar and content */}
        <div className="container mx-auto p-4 md:p-8"> {/* Use a container class for consistent padding */}
          <div className="flex flex-wrap -mx-4"> {/* Use flexbox for layout */}
            <div className="w-full md:w-1/2 md:pl-8"> {/* Text content */}
              <div className="space-y-8">
                <h1 className="text-2xl md:text-4xl font-bold">About Our Bookstore</h1>
                <p className="text-lg md:text-xl mb-4">
                  Welcome to our bookstore app! We are passionate about books and
                  reading, and we're dedicated to providing a wide selection of books
                  for readers of all ages and interests.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Our mission is to make it easy for book lovers to discover new titles,
                  connect with fellow readers, and support authors and independent
                  publishers.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Whether you're looking for bestsellers, classics, or hidden gems,
                  we've got you covered. Our curated collections and personalized
                  recommendations ensure that you'll find something you love every
                  time you visit.
                </p>
                <p className="text-lg md:text-xl">
                  Thank you for choosing our bookstore app. Happy reading!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0"> {/* Image */}
              <img src={banner} alt="Bookstore banner image" className="max-w-md" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
