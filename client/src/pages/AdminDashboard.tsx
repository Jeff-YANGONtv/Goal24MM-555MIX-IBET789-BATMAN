import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Trash2, Edit2, Plus } from 'lucide-react';

interface TeamData {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image_url?: string;
  founded?: number;
  stadium?: string;
}

interface LeagueData {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image_url?: string;
  country?: string;
}

interface WorldCupStageData {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image_url?: string;
  year?: number;
  stage?: string;
}

interface BettingPageData {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image_url?: string;
  platform?: string;
}

interface MatchData {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image_url?: string;
  date?: string;
  teams?: string[];
}

type ContentType = 'teams' | 'leagues' | 'worldcup_stages' | 'betting_pages' | 'matches';
type ContentData = TeamData | LeagueData | WorldCupStageData | BettingPageData | MatchData;

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ContentType>('teams');

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/admin'
      }
    });
    if (error) toast.error('Login failed: ' + error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Logged out');
  };

  const ALLOWED_EMAIL = 'jeff372001@gmail.com';
  const isAuthorized = user?.email === ALLOWED_EMAIL;
  const [data, setData] = useState<ContentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const tableConfigs: Record<ContentType, { label: string; fields: string[] }> = {
    teams: { label: 'Teams', fields: ['title', 'slug', 'stadium', 'founded'] },
    leagues: { label: 'Leagues', fields: ['title', 'slug', 'country'] },
    worldcup_stages: { label: 'World Cup Stages', fields: ['title', 'slug', 'year', 'stage'] },
    betting_pages: { label: 'Betting Pages', fields: ['title', 'slug', 'platform'] },
    matches: { label: 'Matches', fields: ['title', 'slug', 'date'] },
  };

  const formFields: Record<ContentType, string[]> = {
    teams: ['slug', 'title', 'description', 'keywords', 'content', 'image_url', 'founded', 'stadium'],
    leagues: ['slug', 'title', 'description', 'keywords', 'content', 'image_url', 'country'],
    worldcup_stages: ['slug', 'title', 'description', 'keywords', 'content', 'image_url', 'year', 'stage'],
    betting_pages: ['slug', 'title', 'description', 'keywords', 'content', 'image_url', 'platform'],
    matches: ['slug', 'title', 'description', 'keywords', 'content', 'image_url', 'date', 'teams'],
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: fetchedData, error } = await supabase.from(activeTab).select('*');
      if (error) throw error;
      setData(fetchedData || []);
    } catch (error) {
      console.error(`Error fetching ${activeTab}:`, error);
      toast.error(`Failed to fetch ${activeTab}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.slug || !formData.title) {
      toast.error('Slug and Title are required');
      return;
    }

    try {
      const payload = preparePayload();

      if (editingId) {
        const { error } = await supabase
          .from(activeTab)
          .update(payload)
          .eq('id', editingId);
        if (error) throw error;
        toast.success(`${tableConfigs[activeTab].label.slice(0, -1)} updated successfully`);
      } else {
        const { error } = await supabase.from(activeTab).insert([payload]);
        if (error) throw error;
        toast.success(`${tableConfigs[activeTab].label.slice(0, -1)} created successfully`);
      }

      resetForm();
      fetchData();
    } catch (error) {
      console.error(`Error saving ${activeTab}:`, error);
      toast.error(`Failed to save ${tableConfigs[activeTab].label.slice(0, -1)}`);
    }
  };

  const preparePayload = () => {
    const payload: Record<string, any> = {
      slug: formData.slug,
      title: formData.title,
      description: formData.description || '',
      keywords: formData.keywords ? formData.keywords.split(',').map((k: string) => k.trim()) : [],
      content: formData.content || '',
      image_url: formData.image_url || null,
    };

    if (activeTab === 'teams') {
      payload.founded = formData.founded ? parseInt(formData.founded) : null;
      payload.stadium = formData.stadium || null;
    } else if (activeTab === 'leagues') {
      payload.country = formData.country || null;
    } else if (activeTab === 'worldcup_stages') {
      payload.year = formData.year ? parseInt(formData.year) : null;
      payload.stage = formData.stage || null;
    } else if (activeTab === 'betting_pages') {
      payload.platform = formData.platform || null;
    } else if (activeTab === 'matches') {
      payload.date = formData.date || null;
      payload.teams = formData.teams ? formData.teams.split(',').map((t: string) => t.trim()) : [];
    }

    return payload;
  };

  const handleEdit = (item: ContentData) => {
    const editData: Record<string, any> = {
      slug: item.slug,
      title: item.title,
      description: item.description,
      keywords: item.keywords?.join(', ') || '',
      content: item.content,
      image_url: item.image_url || '',
    };

    if (activeTab === 'teams' && 'founded' in item) {
      editData.founded = item.founded?.toString() || '';
      editData.stadium = item.stadium || '';
    } else if (activeTab === 'leagues' && 'country' in item) {
      editData.country = item.country || '';
    } else if (activeTab === 'worldcup_stages' && 'year' in item) {
      editData.year = item.year?.toString() || '';
      editData.stage = item.stage || '';
    } else if (activeTab === 'betting_pages' && 'platform' in item) {
      editData.platform = item.platform || '';
    } else if (activeTab === 'matches' && 'date' in item) {
      editData.date = item.date || '';
      editData.teams = item.teams?.join(', ') || '';
    }

    setFormData(editData);
    setEditingId(item.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to delete this ${tableConfigs[activeTab].label.slice(0, -1).toLowerCase()}?`)) return;

    try {
      const { error } = await supabase.from(activeTab).delete().eq('id', id);
      if (error) throw error;
      toast.success(`${tableConfigs[activeTab].label.slice(0, -1)} deleted successfully`);
      fetchData();
    } catch (error) {
      console.error(`Error deleting from ${activeTab}:`, error);
      toast.error(`Failed to delete ${tableConfigs[activeTab].label.slice(0, -1)}`);
    }
  };

  const resetForm = () => {
    setFormData({});
    setEditingId(null);
    setIsFormOpen(false);
  };

  const renderFormField = (fieldName: string) => {
    const label = fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/g, ' ');
    const isRequired = fieldName === 'slug' || fieldName === 'title';

    if (fieldName === 'content') {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {isRequired && '*'}
          </label>
          <Textarea
            value={formData[fieldName] || ''}
            onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
            placeholder={`Enter ${label.toLowerCase()}`}
            rows={4}
          />
        </div>
      );
    }

    if (fieldName === 'keywords' || fieldName === 'teams') {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} (comma-separated)
          </label>
          <Input
            value={formData[fieldName] || ''}
            onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
            placeholder={`e.g., item1, item2, item3`}
          />
        </div>
      );
    }

    if (fieldName === 'founded' || fieldName === 'year') {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <Input
            type="number"
            value={formData[fieldName] || ''}
            onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        </div>
      );
    }

    if (fieldName === 'slug' && editingId) {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {isRequired && '*'}
          </label>
          <Input
            value={formData[fieldName] || ''}
            disabled
            placeholder={`e.g., ${fieldName}`}
          />
        </div>
      );
    }

    return (
      <div key={fieldName}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {isRequired && '*'}
        </label>
        <Input
          value={formData[fieldName] || ''}
          onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    );
  };

  const renderTableRow = (item: ContentData) => {
    const config = tableConfigs[activeTab];
    return (
      <tr key={item.id} className="border-b hover:bg-gray-50">
        {config.fields.map((field) => (
          <td key={field} className="px-6 py-4 text-sm text-gray-900">
            {item[field as keyof ContentData] ? String(item[field as keyof ContentData]) : '-'}
          </td>
        ))}
        <td className="px-6 py-4 text-right">
          <div className="flex justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleEdit(item)}
              className="flex items-center gap-1"
            >
              <Edit2 size={16} />
              Edit
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDelete(item.id)}
              className="flex items-center gap-1"
            >
              <Trash2 size={16} />
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          <p className="text-gray-600 mb-8">Please sign in to access the dashboard.</p>
          <Button onClick={handleLogin} className="w-full py-6 text-lg">
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center border-t-4 border-red-500">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Access Denied</h1>
          <p className="text-gray-600 mb-6">
            Your account ({user.email}) does not have permission to access this dashboard.
          </p>
          <Button variant="outline" onClick={handleLogout} className="w-full">
            Sign out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ContentType)} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="leagues">Leagues</TabsTrigger>
            <TabsTrigger value="worldcup_stages">World Cup</TabsTrigger>
            <TabsTrigger value="betting_pages">Betting</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
          </TabsList>

          {Object.keys(tableConfigs).map((contentType) => (
            <TabsContent key={contentType} value={contentType}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{tableConfigs[contentType as ContentType].label}</h2>
                <Button
                  onClick={() => {
                    resetForm();
                    setIsFormOpen(true);
                  }}
                  className="flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add {tableConfigs[contentType as ContentType].label.slice(0, -1)}
                </Button>
              </div>

              {/* Form Section */}
              {isFormOpen && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {editingId ? 'Edit' : 'Add New'} {tableConfigs[activeTab].label.slice(0, -1)}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {formFields[activeTab].map((field) => {
                        if (field === 'content' || field === 'keywords' || field === 'teams') return null;
                        return renderFormField(field);
                      })}
                    </div>

                    {formFields[activeTab].includes('keywords') && renderFormField('keywords')}
                    {formFields[activeTab].includes('teams') && renderFormField('teams')}
                    {formFields[activeTab].includes('content') && renderFormField('content')}

                    <div className="flex gap-2">
                      <Button type="submit">
                        {editingId ? 'Update' : 'Create'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Data Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b">
                      <tr>
                        {tableConfigs[activeTab].fields.map((field) => (
                          <th key={field} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                            {field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' ')}
                          </th>
                        ))}
                        <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={tableConfigs[activeTab].fields.length + 1} className="px-6 py-4 text-center text-gray-500">
                            Loading...
                          </td>
                        </tr>
                      ) : data.length === 0 ? (
                        <tr>
                          <td colSpan={tableConfigs[activeTab].fields.length + 1} className="px-6 py-4 text-center text-gray-500">
                            No {tableConfigs[activeTab].label.toLowerCase()} found. Create one to get started.
                          </td>
                        </tr>
                      ) : (
                        data.map((item) => renderTableRow(item))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
