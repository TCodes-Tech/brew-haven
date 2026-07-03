function Stats() {
  return (
    <>
    <section className="mt-10">
      <div className="w-150 m-auto flex justify-evenly p-3 gap-5 max-lg:flex-col max-lg:w-41" style={{
      background: "rgba(255, 255, 255, 0.05",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
    }}>
        <p className=" text-3xl w-36 text-center m-auto">
          20K+ Customers
        </p>
        <p className=" text-3xl w-25 text-center m-auto">
          15+ Stores
        </p>
        <p className="text-3xl w-30 text-center m-auto">
          100% Quality
        </p>
        <p className=" text-3xl w-25 text-center m-auto">
          4.9 Rating
        </p>
      </div>
    </section>
    </>
  )
}

export default Stats
