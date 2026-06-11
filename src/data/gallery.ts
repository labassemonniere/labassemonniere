export const galleryImages = Object.values(
  import.meta.glob(
    "../assets/**/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
    {
      eager: true,
      import: "default"
    }
  )
);