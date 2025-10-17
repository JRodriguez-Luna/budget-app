import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection
    const userCount = await prisma.user.count();
    
    return NextResponse.json({ 
      message: 'Backend and database connected! 🎉',
      database: 'Local Prisma Postgres',
      connected: true,
      userCount: userCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ 
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      connected: false
    }, { status: 500 });
  }
}
