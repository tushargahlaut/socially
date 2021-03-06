import Head from 'next/head'

import styles from '../styles/Home.module.css'

import {useQuery} from '@apollo/client';
import Posts from '../comps/Posts/Posts';
import { useContext, useEffect, useState } from 'react';
import { FETCH_POSTS_QUERY } from '../util/gql';

export default function Home() {
  
  const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
  if(data) {
    const { getPosts: posts } = data;
  }
  if(error) {
    console.log(error);
    return "error"; 
  }


  
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data?<Posts posts={posts}/> : <p>Posts Loading</p>}
    </div>
  )
}
