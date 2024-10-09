import { useSessionContext } from '@/app/context/SessionContext';
import moment from 'moment';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  post_id: string;
  profiles: any | null;
  user_id: string | null;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  // if (isLoading) return <p>Loading comments...</p>;

  const { data: session, isLoading, error } = useSessionContext();
  const user = session?.profile;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!session) return <div>Not logged in</div>;

  console.log(comments);

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-lg font-semibold">Comments</h3>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="mb-4 rounded bg-gray-100 p-3">
            <div className="mb-2 flex items-center">
              {user.profile_img ? (
                <img
                  src={user.profile_img}
                  alt={`${user.display_name}'s profile`}
                  className="mr-2 h-8 w-8 rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = ''; // If image fails, clear it to show initials
                    e.currentTarget.style.display = 'none'; // Hide the broken image
                  }}
                />
              ) : (
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white">
                  {user.display_name
                    ? user.display_name
                        .split(' ')
                        .map((n: string) => n[0])
                        .join('')
                        .substring(0, 2)
                    : '??'}
                </div>
              )}
              <div>
                <p className="font-semibold">{user.display_name}</p>
                <p className="text-xs text-gray-500">
                  {moment.utc(comment.created_at).local().fromNow()}
                </p>
              </div>
            </div>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
}
