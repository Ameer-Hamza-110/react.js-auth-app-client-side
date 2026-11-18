import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Upload,
  X,
  ImagePlus,
  Plus,
  Trash2,
  Link2,
  FolderGit2,
  Globe,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface ProjectFormData {
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface FormErrors {
  title?: string;
  shortDescription?: string;
  description?: string;
  coverImage?: string;
  gallery?: string;
  technologies?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const initialFormData: ProjectFormData = {
  title: "",
  shortDescription: "",
  description: "",
  coverImage: "",
  gallery: [],
  technologies: [],
  liveUrl: "",
  githubUrl: "",
};

const MAX_FILE_SIZE_MB = 5;
const MAX_GALLERY_IMAGES = 10;
const MAX_TECHNOLOGIES = 20;

const inputClasses =
  "w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-100 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400";

const labelClasses = "mb-2 block text-sm font-medium text-zinc-800";

const CreateProject = () => {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [techInput, setTechInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [coverUploading, setCoverUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);

  // ---------- Field helpers ----------
  const updateField = <K extends keyof ProjectFormData>(
    field: K,
    value: ProjectFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // ---------- Cover image upload (simulated) ----------
  const handleCoverUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, coverImage: "Please upload an image file." }));
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        coverImage: `Image must be smaller than ${MAX_FILE_SIZE_MB}MB.`,
      }));
      return;
    }

    setCoverUploading(true);
    setErrors((prev) => ({ ...prev, coverImage: undefined }));

    // Preview immediately
    const localPreview = URL.createObjectURL(file);
    setCoverPreview(localPreview);

    try {
      // TODO: Replace with your real upload endpoint
      // const uploadedUrl = await uploadFile(file);
      // updateField("coverImage", uploadedUrl);

      // Simulated upload — replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      const fakeUrl = `https://cdn.example.com/projects/${Date.now()}-${file.name}`;
      updateField("coverImage", fakeUrl);
    } catch {
      setErrors((prev) => ({
        ...prev,
        coverImage: "Failed to upload image. Please try again.",
      }));
      setCoverPreview(null);
    } finally {
      setCoverUploading(false);
    }
  };

  const handleRemoveCover = () => {
    setCoverPreview(null);
    updateField("coverImage", "");
  };

  // ---------- Gallery upload (simulated, multiple) ----------
  const handleGalleryUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    const remainingSlots = MAX_GALLERY_IMAGES - formData.gallery.length;
    if (files.length > remainingSlots) {
      setErrors((prev) => ({
        ...prev,
        gallery: `You can upload up to ${MAX_GALLERY_IMAGES} gallery images.`,
      }));
      return;
    }

    const invalid = files.find(
      (f) => !f.type.startsWith("image/") || f.size > MAX_FILE_SIZE_MB * 1024 * 1024
    );
    if (invalid) {
      setErrors((prev) => ({
        ...prev,
        gallery: `Each image must be an image file under ${MAX_FILE_SIZE_MB}MB.`,
      }));
      return;
    }

    setGalleryUploading(true);
    setErrors((prev) => ({ ...prev, gallery: undefined }));

    try {
      // TODO: Replace with real multi-upload API
      await new Promise((resolve) => setTimeout(resolve, 800));
      const newUrls = files.map(
        (f) => `https://cdn.example.com/projects/gallery/${Date.now()}-${f.name}`
      );
      updateField("gallery", [...formData.gallery, ...newUrls]);
    } catch {
      setErrors((prev) => ({
        ...prev,
        gallery: "Failed to upload gallery images.",
      }));
    } finally {
      setGalleryUploading(false);
      e.target.value = "";
    }
  };

  const removeGalleryImage = (index: number) => {
    updateField(
      "gallery",
      formData.gallery.filter((_, i) => i !== index)
    );
  };

  // ---------- Technologies tag input ----------
  const addTechnology = () => {
    const trimmed = techInput.trim();
    if (!trimmed) return;
    if (formData.technologies.includes(trimmed)) {
      setTechInput("");
      return;
    }
    if (formData.technologies.length >= MAX_TECHNOLOGIES) {
      setErrors((prev) => ({
        ...prev,
        technologies: `You can add up to ${MAX_TECHNOLOGIES} technologies.`,
      }));
      return;
    }
    updateField("technologies", [...formData.technologies, trimmed]);
    setTechInput("");
  };

  const handleTechKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTechnology();
    }
    if (e.key === "Backspace" && !techInput && formData.technologies.length) {
      updateField("technologies", formData.technologies.slice(0, -1));
    }
  };

  const removeTechnology = (tech: string) => {
    updateField(
      "technologies",
      formData.technologies.filter((t) => t !== tech)
    );
  };

  // ---------- Validation ----------
  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!formData.title.trim()) next.title = "Title is required.";
    else if (formData.title.length > 100) next.title = "Max 100 characters.";

    if (!formData.shortDescription.trim())
      next.shortDescription = "Short description is required.";
    else if (formData.shortDescription.length > 200)
      next.shortDescription = "Max 200 characters.";

    if (!formData.description.trim())
      next.description = "Description is required.";

    if (!formData.coverImage) next.coverImage = "Cover image is required.";

    if (formData.gallery.length > MAX_GALLERY_IMAGES)
      next.gallery = `Max ${MAX_GALLERY_IMAGES} images.`;

    if (formData.technologies.length === 0)
      next.technologies = "Add at least one technology.";

    const urlPattern = /^https?:\/\/.+/i;
    if (formData.liveUrl && !urlPattern.test(formData.liveUrl))
      next.liveUrl = "Must be a valid URL (https://...).";
    if (formData.githubUrl && !urlPattern.test(formData.githubUrl))
      next.githubUrl = "Must be a valid URL (https://...).";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ---------- Submit ----------
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);

    if (!validate()) {
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: send to your API
      // await api.post("/projects", payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage("Project created successfully!");
      setFormData(initialFormData);
      setCoverPreview(null);
      setTechInput("");
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch {
      setErrors({ title: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Error display helper ----------
  const ErrorText = ({ message }: { message?: string }) =>
    message ? (
      <p
        data-error="true"
        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600"
      >
        <AlertCircle size={13} aria-hidden="true" />
        {message}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-lime-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-1.5 text-xs font-medium text-lime-700 shadow-sm">
            <ImagePlus size={14} aria-hidden="true" />
            Admin Dashboard
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Manage <span className="text-lime-500">Projects.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Upload a new project with images, technologies, and links. All
            fields are validated before submission.
          </p>
        </div>
      </section>

      {/* ===== SUCCESS BANNER ===== */}
      {successMessage && (
        <div className="mx-auto mt-6 max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 rounded-xl border border-lime-300 bg-lime-50 px-4 py-3 text-sm text-lime-800">
            <CheckCircle2 size={18} aria-hidden="true" className="shrink-0" />
            {successMessage}
          </div>
        </div>
      )}

      {/* ===== FORM ===== */}
      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          noValidate
        >
          {/* --- Basic Info --- */}
          <fieldset className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <legend className="px-2 text-sm font-bold text-zinc-900">
              Basic Information
            </legend>

            <div className="mt-4 space-y-5">
              {/* Title */}
              <div>
                <label htmlFor="title" className={labelClasses}>
                  Title <span className="text-lime-600">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="e.g. ShopNest — E-commerce Platform"
                  maxLength={100}
                  className={inputClasses}
                />
                <div className="mt-1 flex justify-between">
                  <ErrorText message={errors.title} />
                  <span className="text-xs text-zinc-400">
                    {formData.title.length}/100
                  </span>
                </div>
              </div>

              {/* Short description */}
              <div>
                <label htmlFor="shortDescription" className={labelClasses}>
                  Short Description <span className="text-lime-600">*</span>
                </label>
                <input
                  id="shortDescription"
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) =>
                    updateField("shortDescription", e.target.value)
                  }
                  placeholder="A one-line summary shown on project cards"
                  maxLength={200}
                  className={inputClasses}
                />
                <div className="mt-1 flex justify-between">
                  <ErrorText message={errors.shortDescription} />
                  <span className="text-xs text-zinc-400">
                    {formData.shortDescription.length}/200
                  </span>
                </div>
              </div>

              {/* Full description */}
              <div>
                <label htmlFor="description" className={labelClasses}>
                  Full Description <span className="text-lime-600">*</span>
                </label>
                <textarea
                  id="description"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Describe the project, features, and what makes it unique..."
                  className={`${inputClasses} resize-y`}
                />
                <ErrorText message={errors.description} />
              </div>
            </div>
          </fieldset>

          {/* --- Cover Image --- */}
          <fieldset className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <legend className="px-2 text-sm font-bold text-zinc-900">
              Cover Image <span className="text-lime-600">*</span>
            </legend>

            <div className="mt-4">
              {coverPreview ? (
                <div className="relative overflow-hidden rounded-xl border border-zinc-200">
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="h-52 w-full object-cover sm:h-64"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveCover}
                    aria-label="Remove cover image"
                    className="absolute right-2 top-2 rounded-lg bg-white/90 p-1.5 text-zinc-700 shadow-sm backdrop-blur transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="coverImage"
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 py-10 text-center transition hover:border-lime-400 hover:bg-lime-50/40"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                    <Upload size={22} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-zinc-800">
                    {coverUploading ? "Uploading..." : "Click to upload cover image"}
                  </p>
                  <p className="text-xs text-zinc-500">
                    PNG, JPG, or WEBP — max {MAX_FILE_SIZE_MB}MB
                  </p>
                  <input
                    id="coverImage"
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    disabled={coverUploading}
                    className="sr-only"
                  />
                </label>
              )}
              <ErrorText message={errors.coverImage} />
            </div>
          </fieldset>

          {/* --- Gallery --- */}
          <fieldset className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <legend className="px-2 text-sm font-bold text-zinc-900">
              Gallery{" "}
              <span className="text-xs font-normal text-zinc-400">
                ({formData.gallery.length}/{MAX_GALLERY_IMAGES})
              </span>
            </legend>

            <div className="mt-4">
              {formData.gallery.length > 0 && (
                <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {formData.gallery.map((url, index) => (
                    <div
                      key={`${url}-${index}`}
                      className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
                    >
                      <img
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        className="h-24 w-full object-cover sm:h-28"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        aria-label={`Remove gallery image ${index + 1}`}
                        className="absolute right-1.5 top-1.5 rounded-md bg-white/90 p-1 text-zinc-700 opacity-0 shadow-sm backdrop-blur transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {formData.gallery.length < MAX_GALLERY_IMAGES && (
                <label
                  htmlFor="gallery"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 text-sm font-medium text-zinc-700 transition hover:border-lime-400 hover:bg-lime-50/40"
                >
                  <Plus size={16} aria-hidden="true" />
                  {galleryUploading ? "Uploading..." : "Add gallery images"}
                  <input
                    id="gallery"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryUpload}
                    disabled={galleryUploading}
                    className="sr-only"
                  />
                </label>
              )}
              <ErrorText message={errors.gallery} />
            </div>
          </fieldset>

          {/* --- Technologies --- */}
          <fieldset className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <legend className="px-2 text-sm font-bold text-zinc-900">
              Technologies <span className="text-lime-600">*</span>{" "}
              <span className="text-xs font-normal text-zinc-400">
                ({formData.technologies.length}/{MAX_TECHNOLOGIES})
              </span>
            </legend>

            <div className="mt-4">
              {formData.technologies.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {formData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-lime-800"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
                        aria-label={`Remove ${tech}`}
                        className="rounded-full transition hover:text-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleTechKeyDown}
                  placeholder="Type a technology and press Enter (e.g. React)"
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={addTechnology}
                  disabled={!techInput.trim()}
                  className="shrink-0 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add
                </button>
              </div>
              <ErrorText message={errors.technologies} />
            </div>
          </fieldset>

          {/* --- Links --- */}
          <fieldset className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <legend className="px-2 text-sm font-bold text-zinc-900">
              Project Links{" "}
              <span className="text-xs font-normal text-zinc-400">
                (optional)
              </span>
            </legend>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="liveUrl" className={labelClasses}>
                  <Globe size={14} className="mr-1 inline" aria-hidden="true" />
                  Live URL
                </label>
                <input
                  id="liveUrl"
                  type="url"
                  value={formData.liveUrl}
                  onChange={(e) => updateField("liveUrl", e.target.value)}
                  placeholder="https://your-project.com"
                  className={inputClasses}
                />
                <ErrorText message={errors.liveUrl} />
              </div>

              <div>
                <label htmlFor="githubUrl" className={labelClasses}>
                  <FolderGit2
                    size={14}
                    className="mr-1 inline"
                    aria-hidden="true"
                  />
                  GitHub URL
                </label>
                <input
                  id="githubUrl"
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => updateField("githubUrl", e.target.value)}
                  placeholder="https://github.com/user/repo"
                  className={inputClasses}
                />
                <ErrorText message={errors.githubUrl} />
              </div>
            </div>
          </fieldset>

          {/* --- Actions --- */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => {
                setFormData(initialFormData);
                setCoverPreview(null);
                setTechInput("");
                setErrors({});
              }}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-900/30 border-t-zinc-900" />
                  Creating...
                </>
              ) : (
                <>
                  <Upload size={16} aria-hidden="true" />
                  Create Project
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateProject;