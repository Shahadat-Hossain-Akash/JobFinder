
const JobPost = (job_posted_at_datetime_utc) => {
const dateString = job_posted_at_datetime_utc;
const date = new Date(dateString);
const today = new Date();

// Calculate the time difference in milliseconds
const timeDifference = today.getTime() - date.getTime();

// Convert the time difference to days
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Determine the relative time string based on the days difference
let relativeTime;
if (daysDifference === 0) {
  relativeTime = "10 days ago";
} else if (daysDifference === 1) {
  relativeTime = "Yesterday";
} else {
  relativeTime = `${daysDifference} days ago`;
}
  return (
    relativeTime
  )
}

export default JobPost
