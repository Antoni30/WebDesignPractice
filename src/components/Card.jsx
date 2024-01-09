function Card({url,name}) {
    return (<div className="card_Animal">
    <div className="avatar">
      <img
        src={url}
        alt={name}
      />
    </div>
    <strong>{name}</strong>
  </div>);
}

export default Card;