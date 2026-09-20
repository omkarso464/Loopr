// LocalStorage Database for Loopr Campus Marketplace

const DEFAULT_LISTINGS = [
  {
    id: "l1",
    title: "MacBook Air 13\" M3 (8GB/256GB)",
    category: "Electronics",
    type: "Sell",
    price: 720,
    condition: "Excellent",
    description: "Selling my M3 MacBook Air purchased in late 2024. Screen is flawless, no scratches or dents on the body. Battery health is at 94% with only 82 cycles. Comes with original box, 30W adapter, and MagSafe cable. Perfect for engineering/CS students.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Siddharth Sharma",
      email: "siddharth.s@student.edu",
      rating: 4.9,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 15, 2026"
  },
  {
    id: "l2",
    title: "Introduction to Algorithms (CLRS) 4th Ed",
    category: "Books",
    type: "Sell",
    price: 45,
    condition: "Good",
    description: "CS core textbook. Minimal highlighting inside, no torn pages. Binding is completely intact. Essential for CS 161 or DSA prep.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Priya Nair",
      email: "priya.n@student.edu",
      rating: 4.7,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 16, 2026"
  },
  {
    id: "l3",
    title: "Fujifilm X-T30 II + 15-45mm Lens",
    category: "Electronics",
    type: "Exchange",
    price: 0,
    exchangeFor: "iPad Pro (11-inch, M1/M2)",
    condition: "Like New",
    description: "Hardly used camera body and kit lens. Includes 2 extra batteries, charger, and a leather neck strap. Shutter count is under 2,000. Looking to exchange for an iPad Pro with Apple Pencil for note-taking.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Rohan Verma",
      email: "rohan.v@student.edu",
      rating: 4.8,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 14, 2026"
  },
  {
    id: "l4",
    title: "Ergonomic Office Chair (Mesh)",
    category: "Furniture",
    type: "Sell",
    price: 60,
    condition: "Good",
    description: "Adjustable height, armrests, and lumbar support. Mesh back is very breathable, perfect for long study sessions. Selling because I am moving out of the dorms.",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Ananya Deshpande",
      email: "ananya.d@student.edu",
      rating: 4.5,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 12, 2026"
  },
  {
    id: "l5",
    title: "Drafting Board (A2 size) + T-Square",
    category: "Academic",
    type: "Donate",
    price: 0,
    condition: "Fair",
    description: "A2 drawing board, perfect for architecture or mechanical drawing classes. Comes with a 60cm T-square. Has a few tape marks and pencil lines on the edges, but perfectly usable.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Kabir Mehta",
      email: "kabir.m@student.edu",
      rating: 5.0,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 16, 2026"
  },
  {
    id: "l6",
    title: "Patagonia Black Hole Backpack 32L",
    category: "Apparel",
    type: "Sell",
    price: 80,
    condition: "Excellent",
    description: "Extremely durable, water-resistant pack. Used for one semester. Fits up to a 15-inch laptop. All zippers, buckles, and straps are in perfect working order.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    seller: {
      name: "Ishita Khanna",
      email: "ishita.k@student.edu",
      rating: 4.9,
      college: "Sinhgad Institute",
      verified: true
    },
    date: "July 15, 2026"
  }
];

const DEFAULT_CHATS = [
  {
    id: "c1",
    listingId: "l2",
    buyerEmail: "arjun.m@student.edu",
    sellerEmail: "priya.n@student.edu",
    messages: [
      { sender: "priya.n@student.edu", text: "Hey! Let me know if you are interested in the CLRS book.", time: "July 16, 4:30 PM" },
      { sender: "arjun.m@student.edu", text: "Hi Priya, is the book still available?", time: "July 16, 4:45 PM" },
      { sender: "priya.n@student.edu", text: "Yes it is! I can meet you tomorrow around noon at Nescafe.", time: "July 16, 4:46 PM" }
    ]
  }
];

// Helper to get window localStorage safely
function isClient() {
  return typeof window !== 'undefined';
}

export function initDb() {
  if (!isClient()) return;
  
  if (!localStorage.getItem('loopr_listings')) {
    localStorage.setItem('loopr_listings', JSON.stringify(DEFAULT_LISTINGS));
  }
  
  if (!localStorage.getItem('loopr_chats')) {
    localStorage.setItem('loopr_chats', JSON.stringify(DEFAULT_CHATS));
  }
  
  if (!localStorage.getItem('loopr_wishlist')) {
    localStorage.setItem('loopr_wishlist', JSON.stringify([]));
  }
}

// Current User Session
export function getSession() {
  if (!isClient()) return null;
  const session = localStorage.getItem('loopr_session');
  return session ? JSON.parse(session) : null;
}

export function setSession(user) {
  if (!isClient()) return;
  localStorage.setItem('loopr_session', JSON.stringify(user));
}

export function clearSession() {
  if (!isClient()) return;
  localStorage.removeItem('loopr_session');
}

// Listings
export function getListings() {
  if (!isClient()) return DEFAULT_LISTINGS;
  initDb();
  return JSON.parse(localStorage.getItem('loopr_listings'));
}

export function getListingById(id) {
  const listings = getListings();
  return listings.find(l => l.id === id);
}

export function addListing(listing) {
  if (!isClient()) return;
  initDb();
  const listings = getListings();
  const newListing = {
    id: 'l_' + Date.now(),
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    ...listing
  };
  listings.unshift(newListing);
  localStorage.setItem('loopr_listings', JSON.stringify(listings));
  return newListing;
}

export function deleteListing(id) {
  if (!isClient()) return;
  initDb();
  let listings = getListings();
  listings = listings.filter(l => l.id !== id);
  localStorage.setItem('loopr_listings', JSON.stringify(listings));
}

// Wishlist
export function getWishlist() {
  if (!isClient()) return [];
  initDb();
  return JSON.parse(localStorage.getItem('loopr_wishlist'));
}

export function toggleWishlist(id) {
  if (!isClient()) return false;
  initDb();
  const wishlist = getWishlist();
  const index = wishlist.indexOf(id);
  let added = false;
  if (index === -1) {
    wishlist.push(id);
    added = true;
  } else {
    wishlist.splice(index, 1);
  }
  localStorage.setItem('loopr_wishlist', JSON.stringify(wishlist));
  return added;
}

export function isInWishlist(id) {
  const wishlist = getWishlist();
  return wishlist.includes(id);
}

// Chats
export function getChats() {
  if (!isClient()) return DEFAULT_CHATS;
  initDb();
  return JSON.parse(localStorage.getItem('loopr_chats'));
}

export function getChatById(id) {
  const chats = getChats();
  return chats.find(c => c.id === id);
}

export function getChatsForUser(email) {
  const chats = getChats();
  return chats.filter(c => c.buyerEmail === email || c.sellerEmail === email);
}

export function initiateChat(listingId, sellerEmail, buyerEmail) {
  if (!isClient()) return null;
  initDb();
  const chats = getChats();
  
  // Check if chat already exists
  let chat = chats.find(c => c.listingId === listingId && c.buyerEmail === buyerEmail);
  
  if (!chat) {
    chat = {
      id: 'c_' + Date.now(),
      listingId,
      buyerEmail,
      sellerEmail,
      messages: [
        { 
          sender: sellerEmail, 
          text: `Hi there! Thanks for your interest. Let me know if you have any questions.`, 
          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) 
        }
      ]
    };
    chats.push(chat);
    localStorage.setItem('loopr_chats', JSON.stringify(chats));
  }
  
  return chat.id;
}

export function sendChatMessage(chatId, senderEmail, text) {
  if (!isClient()) return;
  initDb();
  const chats = getChats();
  const chatIndex = chats.findIndex(c => c.id === chatId);
  
  if (chatIndex !== -1) {
    const newMessage = {
      sender: senderEmail,
      text,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    };
    chats[chatIndex].messages.push(newMessage);
    localStorage.setItem('loopr_chats', JSON.stringify(chats));
    
    // Simulate auto response if sent by buyer
    if (senderEmail !== chats[chatIndex].sellerEmail) {
      setTimeout(() => {
        simulateSellerReply(chatId);
      }, 1500);
    }
  }
}

function simulateSellerReply(chatId) {
  if (!isClient()) return;
  const chats = JSON.parse(localStorage.getItem('loopr_chats') || '[]');
  const chatIndex = chats.findIndex(c => c.id === chatId);
  
  if (chatIndex !== -1) {
    const chat = chats[chatIndex];
    const replies = [
      "Awesome! That sounds good to me.",
      "Yes, the item is still available. Would you like to meet on campus?",
      "I'm free tomorrow afternoon. We can meet at Nescafe on campus.",
      "Does cash or GPay/UPI work better for you?",
      "Let me check my schedule, but that timing should work!",
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const replyMessage = {
      sender: chat.sellerEmail,
      text: randomReply,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    };
    
    chat.messages.push(replyMessage);
    localStorage.setItem('loopr_chats', JSON.stringify(chats));
    
    // Trigger custom event so page script knows to refresh chat messages
    window.dispatchEvent(new CustomEvent('loopr_chat_received', { detail: { chatId } }));
  }
}
