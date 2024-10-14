"use client"
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUserConversations } from '@/app/api/MessagesData'
import { useSessionContext } from '@/app/context/SessionContext'
import Link from 'next/link'
import Loading from '../loading'
import { formatDate } from './time'




export default function ChatsPage() {

  const { data: session } = useSessionContext();
  const loggedInUserId = session?.profile.user_id



  const {
    data: Conversations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userConversations', loggedInUserId],
    queryFn: () => fetchUserConversations(loggedInUserId),

  });

  if (Conversations?.length === 0) {
    return (
      <div>
        <h2 className="px-4 py-6 font-bold text-xl sticky top-0">Messages</h2>
        <p className="text-4xl font-bold text-black block ml-10">
          Welcome to your<br />inbox!
        </p>

        <button className='bg-purple-600 text-white py-2 px-5 mt-5 rounded-full mx-auto block hover:bg-purple-700'>Write a message</button>
      </div>
    );
  }



  if (error) {
    return <div>Error loading messages: {error.message}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=' px-4 py-6 font-bold text-2xl sticky top-0'>Messages</h2>
      {Conversations?.map((conversation) => {
        const otherParticipant = conversation.participant_1 === loggedInUserId
          ? conversation.participant_2_profile
          : conversation.participant_1_profile;

        return (
          <div key={conversation.id} className="flex items-center p-2 mx-auto  rounded-md  mb-3  border-gray-200 hover:bg-purple-100 dark:hover:bg-blue-900 transition duration-200">
            <Link href={`/chats/${conversation.id}`}>
              <div className="flex items-center w-full cursor-pointer ">
                <img
                  src={otherParticipant.profile_img}
                  alt={otherParticipant.display_name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center w-[60lvw] max-w-[60lvw] lg:w-[20lvw] lg:max-w-[20lvw]">
                    <span className="font-semibold text-customPurple dark:text-gray-100">
                      {otherParticipant.display_name}
                    </span>
                    <span className="text-gray-600 text-sm dark:text-gray-400">
                      {formatDate(conversation.last_message_time)}
                    </span>
                  </div>
                  <p className="text-customBlueGray text-sm mt-1 max-w-[60lvw] truncate dark:text-gray-400 lg:max-w-[20lvw]">
                    {conversation.last_message}
                  </p>
                </div>

              </div>
            </Link>
          </div>

        );
      })}
    </div>
  )
}


