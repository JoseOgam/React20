const Chat = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto bg-gray-100 px-4 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-300 p-4 rounded-lg">
                <p className="text-gray-700">Hello there!</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-blue-500 p-4 rounded-lg">
                <p className="text-white">Hi! How can I help you?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
