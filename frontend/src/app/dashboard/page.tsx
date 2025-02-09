import authConfig from '@/lib/auth.config';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  try {
    const session = await getServerSession(authConfig);
    console.log('Session:', session); // Log the session to see its structure

    if (!session?.user) {
      return redirect('/');
    } else {
      redirect('/dashboard/overview');
    }
  } catch (error) {
    console.error('Dashboard page error:', error);
    // Handle or log the error appropriately
  }
}
