const mongoose = require("mongoose");

// MongoDB connection URI
const uri = "mongodb+srv://pres:MM5QMJP6kKH4oPyS@cluster0.hjwww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the schema and model
const listingSchema = new mongoose.Schema({
  img_name: { type: String, required: true },
  price: { type: String, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  sqft: { type: Number, required: true },
  address: { type: String, required: true },
  features: [{ type: String }],
  year_built: { type: Number, required: true },
  property_type: { type: String, required: true, enum: ["Single-Family Home", "Townhouse", "Condo", "Apartment", "Other"] },
  listing_status: { type: String, required: true, enum: ["For Sale", "Sold", "Pending", "Off Market"] },
});

const Listing = mongoose.model("Listing", listingSchema);

// Sample data
const listings = [
  {
    img_name: "images/house.jpeg",
    price: "$400,000",
    beds: 3,
    baths: 2,
    sqft: 2000,
    address: "123 Maple St, Springfield, IL, 62704",
    features: ["Fireplace", "Large Backyard", "Granite Countertops"],
    year_built: 2010,
    property_type: "Single-Family Home",
    listing_status: "For Sale",
  },
  {
    img_name: "images/house2.jpg",
    price: "$330,000",
    beds: 2,
    baths: 2,
    sqft: 1750,
    address: "9876 Spruce Ln, Columbia, SC, 29203",
    features: ["New Roof", "Updated Kitchen", "Built-in Bookshelves"],
    year_built: 2012,
    property_type: "Townhouse",
    listing_status: "For Sale",
  },
  {
    img_name: "images/house3.jpg",
    price: "$500,000",
    beds: 4,
    baths: 3,
    sqft: 2500,
    address: "456 Oak St, Denver, CO, 80204",
    features: ["Swimming Pool", "Solar Panels", "Hardwood Floors"],
    year_built: 2015,
    property_type: "Single-Family Home",
    listing_status: "Pending",
  },
  {
    img_name: "images/house4.jpg",
    price: "$275,000",
    beds: 2,
    baths: 1,
    sqft: 1200,
    address: "789 Pine St, Portland, OR, 97202",
    features: ["Patio", "New HVAC System", "Corner Lot"],
    year_built: 2005,
    property_type: "Condo",
    listing_status: "For Sale",
  },
  {
    img_name: "images/house5.jpg",
    price: "$650,000",
    beds: 5,
    baths: 4,
    sqft: 3200,
    address: "321 Birch Ave, Austin, TX, 73301",
    features: ["3-Car Garage", "Game Room", "Custom Lighting"],
    year_built: 2018,
    property_type: "Single-Family Home",
    listing_status: "Sold",
  },
  {
    img_name: "images/house0.jpg",
    price: "$350,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "789 Willow Dr, Seattle, WA, 98101",
    features: ["Deck", "Finished Basement", "Updated Bathrooms"],
    year_built: 2010,
    property_type: "Townhouse",
    listing_status: "For Sale",
  },
  {
    img_name: "images/house3.jpg",
    price: "$425,000",
    beds: 4,
    baths: 3,
    sqft: 2100,
    address: "345 Cedar Ln, Miami, FL, 33101",
    features: ["Waterfront", "Open Floor Plan", "High Ceilings"],
    year_built: 2020,
    property_type: "Single-Family Home",
    listing_status: "Pending",
  },
  {
    img_name: "images/house5.jpg",
    price: "$275,000",
    beds: 2,
    baths: 1,
    sqft: 1300,
    address: "678 Poplar Rd, Atlanta, GA, 30301",
    features: ["Hardwood Floors", "Updated Kitchen", "Fenced Yard"],
    year_built: 2005,
    property_type: "Condo",
    listing_status: "For Sale",
  },
];

async function populateDatabase() {
    try {
      // Clear the existing collection
      await Listing.deleteMany({});
      console.log("Existing listings cleared.");
  
      // Insert new listings
      await Listing.insertMany(listings);
      console.log("Database populated successfully!");
  
      mongoose.connection.close();
    } catch (err) {
      console.error("Error populating database:", err);
    }
  }
  

populateDatabase();
