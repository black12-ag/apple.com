import styled from 'styled-components';

const FeaturesContainer = styled.div`
  background: #f5f5f7;
`;

const Section = styled.section`
  padding: 80px 0;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
`;

const SectionTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 56px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  max-width: 600px;
`;

const LinkList = styled.div`
  text-align: right;
`;

const BlockLink = styled.a`
  display: flex;
  font-size: 17px;
  color: #06c;
  text-decoration: none;
  margin-top: 8px;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const BentoGrid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$cols || 3}, 1fr);
  gap: 24px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardCallback = styled.div<{ $bg?: string; $dark?: boolean; $span?: number }>`
  background: ${props => props.$bg || '#fff'};
  grid-column: span ${props => props.$span || 1};
  border-radius: 30px;
  overflow: hidden;
  padding: 40px;
  position: relative;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${props => props.$dark ? '#fff' : '#1d1d1f'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  img.card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }
`;

const Eyebrow = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #6e6e73;
  margin-bottom: 8px;
`;

const CardHeadline = styled.h3<{ $size?: string }>`
  font-size: ${props => props.$size || '40px'};
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CardSubhead = styled.p`
  font-size: 19px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const FloatingImage = styled.img`
  width: 80%;
  margin: 40px auto 0;
  display: block;
`;

export const MacFeatures = () => {
    // Note: In a real implementation, we would download meaningful images for these backgrounds.
    // For now we use the assets we have or placeholders where necessary, but we stick to the provided copy.
    return (
        <FeaturesContainer>

            {/* 1. Why Apple is the best place to buy Mac */}
            <Section>
                <SectionTitleHeader>
                    <SectionTitle>Why Apple is the best place to buy Mac.</SectionTitle>
                    <LinkList>
                        <BlockLink href="#">Shop Mac &gt;</BlockLink>
                    </LinkList>
                </SectionTitleHeader>

                <BentoGrid $cols={3}>
                    {/* We create cards matching the user list */}
                    <CardCallback $bg="#fff" $span={1}>
                        <div className="content">
                            <CardHeadline $size="28px">Pay over time, interest-free.</CardHeadline>
                            <CardSubhead>When you choose to check out at Apple with Apple Card Monthly Installments.</CardSubhead>
                        </div>
                    </CardCallback>
                    <CardCallback $bg="#e8f2ff" $span={1}>
                        <div className="content">
                            <CardHeadline $size="28px">Save on a new Mac with education pricing.</CardHeadline>
                            <CardSubhead>Available to college students and educators.</CardSubhead>
                        </div>
                    </CardCallback>
                    <CardCallback $bg="#fff" $span={1}>
                        <div className="content">
                            <CardHeadline $size="28px">Join an online Personal Setup session.</CardHeadline>
                            <CardSubhead>Talk one on one with a Specialist to set up your Mac.</CardSubhead>
                        </div>
                    </CardCallback>
                </BentoGrid>
            </Section>

            {/* 2. Get to know Mac */}
            <Section>
                <SectionTitleHeader>
                    <SectionTitle>Get to know Mac.</SectionTitle>
                </SectionTitleHeader>
                <BentoGrid $cols={3}>
                    <CardCallback $dark $bg="#000" $span={2}>
                        {/* This would correspond to "Performance and Battery Life" image */}
                        <div className="content">
                            <Eyebrow>Performance and Battery Life</Eyebrow>
                            <CardHeadline>Go fast. Go far.</CardHeadline>
                        </div>
                        <img src="/assets/mac/real/macbook_pro_hero_mock.jpg" className="card-bg" style={{ opacity: 0.5 }} alt="Performance" />
                    </CardCallback>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <Eyebrow>Built for AI</Eyebrow>
                            <CardHeadline>Smart. Secure. On device.</CardHeadline>
                        </div>
                    </CardCallback>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <Eyebrow>macOS and Apple Intelligence</Eyebrow>
                            <CardHeadline>Easy to use. Easy to love.</CardHeadline>
                        </div>
                    </CardCallback>
                    <CardCallback $span={2} $bg="#fff">
                        <div className="content">
                            <Eyebrow>Mac + iPhone</Eyebrow>
                            <CardHeadline>Together they work wonders.</CardHeadline>
                        </div>
                    </CardCallback>
                </BentoGrid>
            </Section>

            {/* 3. Help me choose */}
            <Section style={{ background: '#fff', textAlign: 'center' }}>
                <SectionTitle style={{ margin: '0 auto 20px' }}>Help me choose.</SectionTitle>
                <CardSubhead style={{ textAlign: 'center' }}>Answer a few questions to find the best Mac for you.</CardSubhead>
                <BlockLink href="#" style={{ justifyContent: 'center', fontSize: 21 }}>Get started &gt;</BlockLink>
            </Section>

            {/* 4. Switch to Mac */}
            <Section>
                <BentoGrid $cols={2}>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <CardHeadline>Switch to Mac.</CardHeadline>
                            <CardSubhead>Give us the old. Save on the new.</CardSubhead>
                            <BlockLink href="#">See what your device is worth</BlockLink>
                        </div>
                    </CardCallback>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <CardHeadline>Mac does that.</CardHeadline>
                            <CardSubhead>See how easy it is to switch to Mac.</CardSubhead>
                            <BlockLink href="#">Learn more</BlockLink>
                        </div>
                    </CardCallback>
                </BentoGrid>
            </Section>

            {/* 5. Mac Essentials */}
            <Section>
                <SectionTitle>Mac essentials.</SectionTitle>
                <BentoGrid $cols={2} style={{ marginTop: 40 }}>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <CardHeadline>Mac accessories</CardHeadline>
                            <CardSubhead>Explore keyboards, mice, and other essentials.</CardSubhead>
                            <BlockLink href="#">Shop Mac accessories</BlockLink>
                        </div>
                        <FloatingImage src="/assets/mac/real/accessories.svg" style={{ width: '20%' }} />
                    </CardCallback>
                    <CardCallback $bg="#fff">
                        <div className="content">
                            <CardHeadline>Studio Display</CardHeadline>
                            <CardSubhead>The 27-inch 5K Retina display pairs beautifully with any Mac.</CardSubhead>
                            <BlockLink href="#">Learn more</BlockLink>
                        </div>
                        <FloatingImage src="/assets/mac/real/studio_display.jpg" style={{ width: '60%' }} />
                    </CardCallback>
                </BentoGrid>
            </Section>

        </FeaturesContainer>
    );
};
