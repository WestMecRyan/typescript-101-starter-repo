// Import necessary modules
import * as fs from 'node:fs';
import * as path from "node:path";

// Define the User interface to match your JSON structure
interface User {
  id: number;
  name: string;
  email: string;
  joined: string;
  lastLogin: string;
  interests: string[];
  friends: number[];
  purchases: {
    id: string;
    item: string;
    price: number;
    date: string;
  }[];
  settings: {
    notifications: boolean;
    theme: string;
    language: string;
  };
}

// Define the MutualFriendship interface for our results
interface MutualFriendship {
  user1: number;
  user2: number;
  user1Name: string;
  user2Name: string;
}

// Read and parse the JSON file
function loadUsers(): User[] {
  // Construct the path to the users.json file (going up one directory level from current file)
  const filePath = path.join(__dirname, '../../data/users15.json');

  // Read the file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse the JSON content
  return JSON.parse(fileContent) as User[];
}

// Find mutual friendships function
function findMutualFriendships(users: User[]): MutualFriendship[] {
  const mutualFriendships: MutualFriendship[] = [];

  // Create a map for quick user lookup
  const userMap = new Map<number, User>();
  users.forEach(user => userMap.set(user.id, user));

  // Check each user's friends
  for (const user of users) {
    for (const friendId of user.friends) {
      const friend = userMap.get(friendId);

      // Skip if friend doesn't exist in our database
      if (!friend) continue;

      // Check if friendship is mutual
      if (friend.friends.includes(user.id)) {
        // Only add each friendship once (avoid duplicates)
        if (user.id < friendId) {
          mutualFriendships.push({
            user1: user.id,
            user2: friendId,
            user1Name: user.name,
            user2Name: friend.name
          });
        }
      }
    }
  }

  return mutualFriendships;
}

// Execute the functions
function main() {
  try {
    // Load users from JSON file
    const users = loadUsers();

    // Find mutual friendships
    const mutualFriends = findMutualFriendships(users);

    // Display results
    console.log(`Found ${mutualFriends.length} mutual friendships:`);
    mutualFriends.forEach(friendship => {
      console.log(`- ${friendship.user1Name} (ID: ${friendship.user1}) and ${friendship.user2Name} (ID: ${friendship.user2})`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the program
main();