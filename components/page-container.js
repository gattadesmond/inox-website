import Head from 'next/head';
import Router from 'next/router';
import { ORG_NAME } from '../lib/constants';

export default function PageContainer({ title, description, children}) {
  return (
    <>
      <Head>
        <title>{title || `Next.js by ${ORG_NAME} - The React Framework`}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || `Next.js by ${ORG_NAME} is the React framework for production`}
          />
        )}
      </Head>
      {children}
      <style jsx global>
        {`
         
        `}
      </style>
    </>
  );
}
