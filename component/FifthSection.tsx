import React, { FC } from 'react';

const FifthSection: FC = () => {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
            LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 place-item-center">
          {/* Row 1 */}
          <div className="flex items-center justify-center h-25">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422591/f30a20c793164c02e92df15ac3e046102e4de474_tmdjg2.png"
              alt="Hero"
              className="h-[97px] w-[86px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422820/36e2135d88c8ac0d9f239bc8f2954062c5a5bec9_jd7ytz.png"
              alt="Honda"
              className="h-[97px] w-[121px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422864/79fb86c90de20949b3fa95afaa8ea29a33eadab4_nnmow8.png"
              alt="Bajaj"
              className="h-[90px] w-[160px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422891/443ef5606a76d7c3a2ec14bd8d4cde62cffd948c_fm9wrj.png"
              alt="TVS"
              className="h-[62px] w-[222px] object-contain"
            />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422921/a64d4abe48c7f7575f6d19c1f64726c9a74b457b_owfn3n.png"
              alt="Royal Enfield"
              className="h-[58px] w-[238px] object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422942/18b9444bf639dd200e47b671704e6f19ce6469bf_vraatu.png"
              alt="Yamaha"
              className="h-[60px] w-[173px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422967/c7ca94558456caec47a2a67e338006c83a46a508_qibhsw.png"
              alt="KTM"
              className="h-[53px] w-[136px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750422988/1da253e01265b06f410642297ee0f0566d8b7255_nhuxox.jpg"
              alt="Ather"
              className="h-[74px] w-[205px] object-contain"
            />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750423025/05d3385ddcf9342fdef29246d130fb753924364f_azmlhd.png"
              alt="Ola Electric"
              className="h-[92px] w-[185px] object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750423049/93908dc9e8c754b2cdc66cb7332bf1379ee24b51_bobqup.png"
              alt="Revolt"
              className="h-[83px] w-[167px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750423104/faedee766bf1d25b03e555c1d683b5615c2e7fa8_gj1lqt.jpg"
              alt="Ultraviolette"
              className="h-[63px] w-[287px] object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="https://res.cloudinary.com/diez3alve/image/upload/v1750423129/e45242971467d105171431ea55f913ba5f4c17dd_rxe7hp.jpg"
              alt="Tork Motors"
              className="h-[140px] w-[109px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;