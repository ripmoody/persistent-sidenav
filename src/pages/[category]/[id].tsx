import { GetServerSideProps } from 'next'

export default function Page(props: PageProps) {
  return <>{props.query.id}</>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  }
}
