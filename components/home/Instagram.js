export default function Instagram({ result }) {
  //   console.log(result);
  return (
    <div className="instagram">
      <h2>Nos dernière réalisation sur Saint Laurent Du Maroni</h2>
      <ul className="container-insta">
        {result.data.map((post, index) => (
          <li key={index} className="container-post">
            <div className="item-date">{post.timestamp}</div>
            <div className="item-img"></div>
            <div className="item-caption"></div>
            <div className="item-username"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Hello still here ? hello , yes
