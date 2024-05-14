type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const response = await fetch('');
  return <main>Event page</main>;
}
