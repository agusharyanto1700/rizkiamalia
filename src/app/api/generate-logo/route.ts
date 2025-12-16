import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const zai = await ZAI.create();
    
    const response = await zai.images.generations.create({
      prompt: 'Professional pharmacy logo for "RIZKI AMALIA", modern design with medical cross symbol, green and white color scheme, clean minimalist style, suitable for healthcare business',
      size: '512x512'
    });

    const imageBase64 = response.data[0].base64;
    
    return NextResponse.json({ 
      success: true, 
      image: imageBase64 
    });
    
  } catch (error) {
    console.error('Logo generation failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to generate logo' 
    }, { status: 500 });
  }
}