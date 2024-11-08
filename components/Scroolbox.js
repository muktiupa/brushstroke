import React, { useState, useEffect, useRef } from 'react';

function Scroolbox() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [loading, setLoading] = useState(false); // State to check if data is being fetched
  const scrollBoxRef = useRef(null); // Reference to the scrollable container

  // Function to fetch more items from data.json (API simulation)
  const fetchItems = async () => {
    setLoading(true);
    try {
      // Fetching data from the data.json file in the public folder
      const response = await fetch('/data.json');
      const data = await response.json();
      
      // Simulate pagination by fetching a subset of items
      const newItems = data.slice(items.length, items.length + 20); // Get the next 20 items based on current length
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    const bottom = scrollBoxRef.current.scrollHeight === scrollBoxRef.current.scrollTop + scrollBoxRef.current.clientHeight;
    if (bottom && !loading) {
      fetchItems(); // Fetch more items when the user reaches the bottom
    }
  };

  // useEffect hook to add event listener when component mounts
  useEffect(() => {
    fetchItems(); // Fetch initial items when the component mounts
    const scrollContainer = scrollBoxRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [loading, items]);

  return (
    <div ref={scrollBoxRef} className='w-full h-[100vh] overflow-y-auto'>
      <div className="text-white p-4 grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg w-full">
            <div className="relative pb-[42.86%]"> {/* 3/7 = 0.4286 -> 42.86% */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md mb-4" 
              />
            </div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default Scroolbox;
