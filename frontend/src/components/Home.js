import React from "react";

function Home() {
    return (
        <div class="container">
            <div className="row">
                <div class="col">

                    <img src="/interview.png"
                        style={{
                            height: 400,
                            width: 525,
                            marginTop: 70

                        }} />
                </div>


                <div class="col">

                    <br></br>
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Staj Otomasyonu Hakkında</h5>
                                <p class="card-text">Staj Başvurularını yapabilir, geçmiş staj başvurularının durumunu
                                    ve eski stajlarını görüntüleyebilirsiniz. staj defterinizi sistem üzerinden şirket yetkilinize onaylatabilir,
                                    staj sonunda belgelerini teslim ederek stajını tamamlayabilirsiniz.</p>

                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Üniversitemiz</h5>
                                <h6>Misyon</h6>
                                <p class="card-text">Etik değerlere bağlı, girişimci ve yetkin bireyler yetiştirmek; bilgi, tasarım ve teknoloji üretilmesine öncülük etmek; bilgi ve tecrübeyi bölgesel, ulusal ve küresel ölçekte toplum yararına sunmak.</p>
                                <h6>Vizyon</h6>
                                <p className="card-text">Mezunları evrensel değerlere bağlı, araştırmacı, üretken, paylaşımcı, özgüvenli ve yetkin olan; sürdürülebilir ve yenilikçi araştırmalarla bilim ve teknolojiyi üreten; toplumun kalkınması ve refahı için insan ve çevre odaklı çözümler sunan; alanlarında öncü araştırma faaliyetlerini tasarlayan ve gerçekleştiren bir araştırma üniversitesi olmak.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;