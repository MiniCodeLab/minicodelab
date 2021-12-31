import Link from "next/link";

const Tag: React.FC = ({tag, color}) => {
  return (
    <ul>
      <li>
        <Link href="/">
          <div className="icon-container">
            <a>
              <Image
                src="/flask.png"
                alt="Flask icon"
                layout="fill"
                className="icon"
              />
            </a>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/feed">
          <a>
            <div className="icon-container">
              <Image
                src="/feed.png"
                alt="Feed icon"
                layout="fill"
                className="icon"
              />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/calendar">
          <a>
            {" "}
            <div className="icon-container">
              <Image
                src="/calendar.png"
                alt="Calendar icon"
                layout="fill"
                className="icon"
              />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>
            <div className="icon-container">
              <Image
                src="/about.png"
                alt="About icon"
                layout="fill"
                className="icon"
              />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <ColorMode />
      </li>
    </ul>
  );
};

export default Tag;
