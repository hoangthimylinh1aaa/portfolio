// Gradient colors mapping
export const gradients = [
  'from-cyan-500 via-blue-600 to-purple-500', // 0 - JUSSKIN
  'from-purple-500 via-pink-600 to-red-500', // 1 - BHT
  'from-green-500 via-teal-600 to-cyan-500', // 2 - NVP
  'from-yellow-500 via-orange-600 to-red-500', // 3 - ASSA
  'from-indigo-500 via-purple-600 to-pink-500', // 4 - MAKER
  'from-blue-500 via-cyan-600 to-teal-500', // 5 - IVFMD CHAT
];

// Get consistent gradient index based on project ID
export function getGradientIndex(projectId: string): number {
  // Hash the project ID to get consistent index
  const hash = projectId.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return Math.abs(hash) % gradients.length;
}

// Get gradient class for a project
export function getGradientClass(projectId: string): string {
  return gradients[getGradientIndex(projectId)];
}
