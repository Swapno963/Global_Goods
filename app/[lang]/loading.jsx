export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Elegant spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent border-r-transparent animate-spin"></div>
        {/* smooth fade-in animation */}
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
