import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card';
import ButtonWithIcon from '~/components/ui/buttonWithIcon';
import Image from 'next/image';

const HomePage = () => {
  const chromeStoreLink = 'https://chrome.google.com/webstore/detail/your-extension-id'; // Replace with your extension's link

  const chromeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8 p-6">
      <h1 className="text-4xl font-bold text-center">Welcome to Hello Color!</h1>
      <p className="text-center mt-4">Pick color from any website element and save it as hex or RGB.</p>
      
      <Card className="max-w-sm">
        <Image
          src="https://i.pinimg.com/originals/fe/2d/10/fe2d10a2f5ad98781ad7d6979993e1b6.png"
          alt="Placeholder Image"
          width={400}
          height={225}
          className="w-full rounded-t-lg"
        />
        <CardHeader>
          <CardTitle>Placeholder Image</CardTitle>
          <CardDescription>This is a placeholder image description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Additional content can go here.</p>
          <div className="space-y-2">
            <ButtonWithIcon
              href={chromeStoreLink}
              text="Add to Chrome"
              icon={chromeIcon}
              size="medium"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
