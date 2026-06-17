import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

export default function AdminDashboard() {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    keywords: '',
    content: '',
    image_url: '',
    founded: '',
    stadium: '',
  });

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('teams').select('*');
      if (error) throw error;
      setTeams(data || []);
    } catch (error) {
      console.error('Error fetching teams:', error);
      toast.error('Failed to fetch teams');
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
      const payload = {
        slug: formData.slug,
        title: formData.title,
        description: formData.description,
        keywords: formData.keywords.split(',').map(k => k.trim()),
        content: formData.content,
        image_url: formData.image_url || null,
        founded: formData.founded ? parseInt(formData.founded) : null,
        stadium: formData.stadium || null,
      };

      if (editingId) {
        const { error } = await supabase
          .from('teams')
          .update(payload)
          .eq('id', editingId);
        if (error) throw error;
        toast.success('Team updated successfully');
      } else {
        const { error } = await supabase
          .from('teams')
          .insert([payload]);
        if (error) throw error;
        toast.success('Team created successfully');
      }

      resetForm();
      fetchTeams();
    } catch (error) {
      console.error('Error saving team:', error);
      toast.error('Failed to save team');
    }
  };

  const handleEdit = (team: TeamData) => {
    setFormData({
      slug: team.slug,
      title: team.title,
      description: team.description,
      keywords: team.keywords.join(', '),
      content: team.content,
      image_url: team.image_url || '',
      founded: team.founded?.toString() || '',
      stadium: team.stadium || '',
    });
    setEditingId(team.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team?')) return;
    
    try {
      const { error } = await supabase.from('teams').delete().eq('id', id);
      if (error) throw error;
      toast.success('Team deleted successfully');
      fetchTeams();
    } catch (error) {
      console.error('Error deleting team:', error);
      toast.error('Failed to delete team');
    }
  };

  const resetForm = () => {
    setFormData({
      slug: '',
      title: '',
      description: '',
      keywords: '',
      content: '',
      image_url: '',
      founded: '',
      stadium: '',
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard - Teams</h1>
          <Button
            onClick={() => {
              resetForm();
              setIsFormOpen(true);
            }}
            className="flex items-center gap-2"
          >
            <Plus size={20} />
            Add Team
          </Button>
        </div>

        {/* Form Section */}
        {isFormOpen && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingId ? 'Edit Team' : 'Add New Team'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="e.g., arsenal-fc"
                    disabled={!!editingId}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Team name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Keywords (comma-separated)
                </label>
                <Input
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Team content and details"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <Input
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Founded Year
                  </label>
                  <Input
                    value={formData.founded}
                    onChange={(e) => setFormData({ ...formData, founded: e.target.value })}
                    placeholder="1886"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stadium
                  </label>
                  <Input
                    value={formData.stadium}
                    onChange={(e) => setFormData({ ...formData, stadium: e.target.value })}
                    placeholder="Stadium name"
                  />
                </div>
              </div>

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

        {/* Teams List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Stadium
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Founded
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : teams.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No teams found. Create one to get started.
                    </td>
                  </tr>
                ) : (
                  teams.map((team) => (
                    <tr key={team.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{team.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{team.slug}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {team.stadium || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {team.founded || '-'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(team)}
                            className="flex items-center gap-1"
                          >
                            <Edit2 size={16} />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(team.id)}
                            className="flex items-center gap-1"
                          >
                            <Trash2 size={16} />
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
