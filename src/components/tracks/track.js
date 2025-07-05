import { Link } from "react-router-dom";

export default function Track({ track }) {
  const { artist_names, title, full_title, id } = track;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{artist_names}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i> Track
            </strong>
            :{title}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album
            </strong>
            :{full_title}
          </p>
          <Link to={`lyrics/track/${id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i>View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
