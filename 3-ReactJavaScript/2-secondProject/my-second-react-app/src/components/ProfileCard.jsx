import Card from './Card';
import './ProfileCard.css';

function ProfileCard({ name, bio, imageUrl }) {
  return (
    <Card>
      <div className="profile-content">
        <div className="profile-header">
          <img 
            src={imageUrl} 
            alt={name} 
            className="profile-image"
          />
          <h2>{name}</h2>
        </div>
        <p className="profile-bio">{bio}</p>
      </div>
    </Card>
  )
}

export default ProfileCard;