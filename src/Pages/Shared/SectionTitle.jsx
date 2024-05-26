

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="text-center">
            <p className="text-[#D99904] mb-3">---{subtitle}---</p>
            <h2 className="border-y-2 px-14 py-6 text-3xl w-fit mx-auto mb-12">{title}</h2>
        </div>
    );
};

export default SectionTitle;