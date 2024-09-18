import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);
  if (liked) return "you liked this";

  return <button onClick={() => setLiked(true)}>클릭!</button>;
}

export default App;
